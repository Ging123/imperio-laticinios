export default function createOptions(tag:string, index:number) {
  return <option key={index} value={tag}>{tag}</option>
}