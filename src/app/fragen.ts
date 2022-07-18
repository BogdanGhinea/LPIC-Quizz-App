export interface Ganzfragen {
    Fragen:Frage[];

}







export interface Frage {
    qnr: number;
    question:string;
    choicses:Antwort[];
    Frtyp?:string;

}






export interface Antwort{
    anstxt: string;
    correct: boolean;
    givenanswer: boolean;
    givenanswertxt?: string;
}
