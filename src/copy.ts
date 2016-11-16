export default function getCopy(object: any): any {    
    return JSON.parse(JSON.stringify(object));
}