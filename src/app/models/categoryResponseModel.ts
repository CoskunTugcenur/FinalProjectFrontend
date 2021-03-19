import { Category } from "./category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseMode extends ResponseModel{
    data:Category[];
}