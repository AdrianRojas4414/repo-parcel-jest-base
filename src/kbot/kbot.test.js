import saludar from "./saludador"

describe("Saludador", () =>{
    it("Saludar a Adrian en idioma default en la maniana",() =>{
        expect(saludar("Adrian",45,"M",10,"ES")).toEqual("Buenos dias Sr. Adrian");
    });
});
