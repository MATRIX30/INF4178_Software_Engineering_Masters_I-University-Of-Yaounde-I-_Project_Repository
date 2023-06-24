export type IdOutput = {
  id: string;
};

export type PaginateResponse<T> = {
  hasMore: boolean;
  totalCount: number;
  data: T[];
};
