 
export interface lines {
  id: number;
  date: string;
  flag: boolean;
  note: string;
}

 //泛型
export interface result<T>{
  status: 0 | 1 | 2;
  data: {
    doing: T[];
    undoing: T[];
  };
}