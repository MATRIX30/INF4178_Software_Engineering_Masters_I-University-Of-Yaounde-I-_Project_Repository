type Props = {
    hasError: boolean,
    errorDesc: string
}
export default function CustomErrorsComponent({hasError, errorDesc}: Props){
    return(
        <>
          {hasError && <div style={{color:"red", fontSize:10, marginTop:"5px"}}>{errorDesc}</div>}
        </>
    )

}