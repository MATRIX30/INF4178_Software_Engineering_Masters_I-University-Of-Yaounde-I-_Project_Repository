import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Skeleton } from '@mui/material';
import pdfImg from '../../assets/images/pdfPreview.png'


const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
		marginTop: 40,
		padding: 20,
	},
	gridList: {
		width: '100%',
		height: 'auto',
	},
	icon: {
		//color: 'rgba(0, 255, 0, 0.2)',
		color: 'silver'
	},
	searchContainer: {
		marginBottom: 70,
		width: '50%',
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
})

const DocumentList = ({ classes }) => {
	const [searchText, setSearchText] = useState('');
	const [filterCategory, setFilterCategory] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [docs, setDocs] = useState([])
	const [selectedDocument, setSelectedDocument] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		getData()
	}, [])

	const getData = async() => {

		try{
			const response = await axiosInstance.get('/document/getDocuments')
			setDocs(response.data)
		}
		catch(e){
			console.log(e)
		}
	}

	const handleSearchTextChange = (event) => {
		setSearchText(event.target.value);
	};

	const handleFilterCategoryChange = (event) => {
		setFilterCategory(event.target.value);
	};

	const handleSortOrderChange = (event) => {
		setSortOrder(event.target.value);
	};

	const handleDocumentSelect = (file) => {
		setSelectedDocument(file);
		setCurrentPage(1);
	};

	const filteredTiles = docs
		.filter(tile =>
			tile.title.toLowerCase().includes(searchText.toLowerCase()) || tile.author.toLowerCase().includes(searchText.toLowerCase()) &&
			(filterCategory === '' || tile.category === filterCategory)
		)
		.sort((a, b) => {
			const compareValue = a.title.localeCompare(b.title);
			return sortOrder === 'asc' ? compareValue : -compareValue;
		});

	const uniqueCategory = [...new Set(docs.map(tile => tile.category))];

	return (
		<div className={classes.root}>
			<div className={`${classes.searchContainer}`}>
				<TextField
					label="Search by Title or Author"
					value={searchText}
					onChange={handleSearchTextChange}
					style={{ width: 250 }}
				/>
				<TextField
					select
					label="Filter by category"
					value={filterCategory}
					onChange={handleFilterCategoryChange}
					style={{ width: 200 }}
				>
					<MenuItem value="">All categories</MenuItem>
					{uniqueCategory.map(categ => (
						<MenuItem key={categ} value={categ}>
							{categ}
						</MenuItem>
					))}
				</TextField>
				<TextField
					select
					label="Sort Order"
					value={sortOrder}
					onChange={handleSortOrderChange}
					style={{ width: 200 }}
				>
					<MenuItem value="asc">Ascending</MenuItem>
					<MenuItem value="desc">Descending</MenuItem>
				</TextField>
			</div>
			<GridList cellHeight={150} className={classes.gridList} cols={7}>
				{
					filteredTiles.length != 0 ?
						filteredTiles.map(tile => (
							<GridListTile key={tile.document} cols={1} onClick={() => handleDocumentSelect(tile.file)}>
								<a href={'http://localhost:4000/' + tile.document} target='_blank' className='text-center mx-auto'>
									<img src={pdfImg} alt="" width={150} height={125} />
								</a>
								<GridListTileBar
									title={tile.title}
									subtitle={<span>by: {tile.author}</span> }
									actionIcon={
										<IconButton className={classes.icon}>
											<InfoIcon />
										</IconButton>
									}
								/>
							</GridListTile>
						))
					:
						<>
							<Skeleton sx={{ bgcolor: 'rgba(0, 255, 0, .3)', borderRadius: 2, margin: 2 }} variant="rectangular" width={180} height={108} />
							<Skeleton sx={{ bgcolor: 'rgba(0, 255, 0, .3)', borderRadius: 2, margin: 2  }} variant="rectangular" width={180} height={108} />
							<Skeleton sx={{ bgcolor: 'rgba(0, 255, 0, .3)', borderRadius: 2, margin: 2  }} variant="rectangular" width={180} height={108} />
							<Skeleton sx={{ bgcolor: 'rgba(0, 255, 0, .3)', borderRadius: 2, margin: 2  }} variant="rectangular" width={180} height={108} />
						</>
				}
			</GridList>
		</div>
	)
}

DocumentList.propTypes = {
  	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DocumentList)