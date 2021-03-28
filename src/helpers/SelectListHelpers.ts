import store from "../store";

export function doCityList(): any {
    const {data} = (store.getState() as any).cities;
    let items = data;
    let array : any[] = [];
    if (items !== undefined) {
        let no : any = {};
        no.value = "Bezirk auswählen";
        no.text = "Bezirk auswählen";
        array.push(no);
        items.map((element : any) => {
            let obj : any = {};
            obj.value = element.idHuntCity;
            obj.text = element.name;
            array.push(obj)
        });
    }
    return array;
}