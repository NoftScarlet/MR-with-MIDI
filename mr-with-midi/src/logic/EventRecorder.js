import React from 'react';

export default class EventRecorder extends React.Component {
    constructor(props) {
        super(props);
        this.eventRecordsCSV = [];
        this.timeoutID = [];
        this.playedNote = "";
        this.midi = 0;
        this.eventID=0;

        this.notes= ["C1", "C1#", "D1", "D1#", "E1", "F1", "F1#", "G1", "G1#", "A1", "A1#", "B1",
            "C2", "C2#", "D2", "D2#", "E2", "F2", "F2#", "G2", "G2#", "A2", "A2#", "B2",
            "C3", "C3#", "D3", "D3#", "E3", "F3", "F3#", "G3", "G3#", "A3", "A3#", "B3",
            "C4", "C4#", "D4", "D4#", "E4", "F4", "F4#", "G4", "G4#", "A4", "A4#", "B4",
            "C5", "C5#", "D5", "D5#", "E5", "F5", "F5#", "G5", "G5#", "A5", "A5#", "B5",
            "C6", "C6#", "D6", "D6#", "E6", "F6", "F6#", "G6", "G6#", "A6", "A6#", "B6",
            "C7", "C7#", "D7", "D7#", "E7", "F7", "F7#", "G7", "G7#", "A7", "A7#", "B7"
        ];
        this.noteMap = [];
        this.notes.map((currElement, index) => {
            this.noteMap[index+24] = currElement;
        });


    }

    clearAsyncFunctions= () =>{
        let index = this.timeoutID.length;
        while (index--) {
            window.clearTimeout(this.timeoutID[index]);
        }
    };

    clearEventRecordData=()=>{
        this.eventRecordsCSV=[];
    };

    appendScoreSetData = (participantID, scoreSet, ptKeyName, loopLocation) => {

        for ( let i=loopLocation, accum=0, id=0 ; i<scoreSet.length ; i++) {

            this.timeoutID[id++]=setTimeout(()=>{
                this.eventRecordsCSV.push([scoreSet[i]["eventName"],scoreSet[i]["score"],participantID,performance.now().toString()]);
                console.log(this.eventRecordsCSV);
            },accum+=scoreSet[i]["eventDuration"]);
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps ) { //we have to add condition here, to prevent infinity loop
            if (this.props.reset === true) { //reset
                console.log("catch2");
                this.clearEventRecordData();
                this.clearAsyncFunctions();
            } else { //record
                this.appendScoreSetData(this.props.participantID, this.props.scoreSet, this.props.ptKeyName, this.props.loopLocation)
            }
        }
    }

    render () {
        return (
            <div id="eventRecorder" >

            </div>
        )
    }


}