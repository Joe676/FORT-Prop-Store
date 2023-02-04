export default interface Category{
  id: string;
  parent_id?: string;
  name: string;
  children?: Category[];
}