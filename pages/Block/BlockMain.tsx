import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import styles from '../../styles/block.module.scss'

function BlockMain() {

    // 縦列をアルファベット,横を数字とする
    // オセロの白をW 黒をBとする ない状態をN
    const N: null =  null
    const B: number = 0
    const W: number = 1

    // 上の状態Sに代入する
    // 開始時はC3,D4をW C4,D3をBとする

    // オセロの位置
    const tables: (number|null)[][] = [
        [N,N,N,N,N,N],
        [N,N,N,N,N,N],
        [N,N,B,B,W,N],
        [N,N,W,B,N,N],
        [N,N,N,N,N,N],
        [N,N,N,N,N,N],
    ];

    const [dataTables,setDataTables] = useState<(number|null)[][]>(tables)

    // console.log(dataTables)

    const BPositionList: number[] = []
    const WPositionList: number[] = []

    dataTables.forEach(function(items,indexItem){
        if (indexItem < 6) {
            
            const data: any[] = ['A','B','C','D','E']
            
            // Bのコマ位置取得
            items.filter((item,index) =>{
                if (item == B) {
                    BPositionList.push(data[indexItem] + index)
                }
            })

            // Wのコマ位置取得
            items.filter((item,index) =>{
                if (item == W) {
                    WPositionList.push(data[indexItem] + index)
                }
            })


        }
    });

    // console.log("Bの" + BPositionList)
    // console.log("Wの" + WPositionList)

    // スタートするこまをB
    const [start,setStart] = useState<number>(B)

    return (
        <div className={styles.BlockMain}>
            <div>
                <div>先行:0</div>
                <div>後攻:1</div>
            </div>
            <div>
                今のターン:{start}
            </div>
            <div className={styles.field}>
                <div className={styles.fieldCover}>
                    <div>
                        {/* アルファベットごとに分ける */}
                        { dataTables.map((datas,listIndex) =>

                            <div key={listIndex} className={styles.displayFlex}>

                                {/* アルファベットごとに分ける */}
                                { datas.map((data,index) => {

                                    // 要素のitemを取得(例:A1)
                                    const ClickItem = () => {

                                        console.log(datas[index])

                                        // コマが置けるか判定
                                        if (datas[index] == null) {
                                            
                                            // コマをうった際にコマを入れ替え
                                            if (start == W) {
                                                setStart(B)

                                                // コマの隣があるか判定
                                                console.log(dataTables[listIndex][index])

                                                // 置いたコマの右にあるか判定
                                                if (dataTables[listIndex][index + 1] == B) {
                                                    // 置いたコマの右にあるか判定 
                                                    if(dataTables[listIndex][index + 2] == start){

                                                        // 間のコマの色を変える
                                                        setDataTables((prevState) => [...prevState,datas.splice(index + 1,1,start)])
                                                    
                                                    } else if(dataTables[listIndex][index + 2] == B){

                                                        // 間のコマの色を変える
                                                        setDataTables((prevState) => [...prevState,datas.splice(index + 1,1,start)])
                                                        setDataTables((prevState) => [...prevState,datas.splice(index + 2,1,start)])

                                                        if(dataTables[listIndex][index + 3] == B){

                                                            // 間のコマの色を変える
                                                            setDataTables((prevState) => [...prevState,datas.splice(index + 3,1,start)])

                                                            if(dataTables[listIndex][index + 4] == B){

                                                                // 間のコマの色を変える
                                                                setDataTables((prevState) => [...prevState,datas.splice(index + 3,1,start)])
                                                            }
                                                        }

                                                    }
                                                }

                                                // 置いたコマの左にあるか判定
                                                if (dataTables[listIndex][index - 1] == B) {
                                                    // 置いたコマの右にあるか判定 
                                                    if(dataTables[listIndex][index - 2] == start){

                                                        // 間のコマの色を変える
                                                        setDataTables((prevState) => [...prevState,datas.splice(index - 1,1,start)])
                                                    
                                                    } else if(dataTables[listIndex][index - 2] == B){
                                                        
                                                    }
                                                }

                                                // 置いたコマの上にあるか判定
                                                if (dataTables[listIndex - 1][index] == B) {
                                                    console.log("あります")
                                                    // 置いたコマの上にあるか判定 
                                                    if(dataTables[listIndex - 2][index] == start){

                                                        // 間のコマの色を変える
                                                        setDataTables((prevState) => [...prevState,dataTables[listIndex - 1].splice(index,1,start)])
                                                    
                                                    } else if(dataTables[listIndex - 2][index] == B){
                                                        
                                                    }
                                                }

                                                // 置いたコマの下にあるか判定
                                                if (dataTables[listIndex + 1][index] == B) {
                                                console.log("あります")
                                                // 置いたコマの下にあるか判定 
                                                if(dataTables[listIndex + 2][index] == start){

                                                    // 間のコマの色を変える
                                                    setDataTables((prevState) => [...prevState,dataTables[listIndex + 1].splice(index,1,start)])
                                                
                                                } else if(dataTables[listIndex + 2][index] == B){
                                                    
                                                }
                                            }

                                                console.log(dataTables[listIndex][index + 3])

                                                // コマの左にあるか判定
                                                if (dataTables[listIndex][index - 1] == B) {
                                                    console.log(B + "が左にあります")
                                                }

                                            } else {
                                                setStart(W)
                                            }
                                            
                                            // クリックしたら要素をnullから変更
                                            setDataTables((prevState) => [...prevState,datas.splice(index,1,start)])
                                        
                                        } else {

                                            console.log("おけません")

                                        }
                                        
                                        console.log(dataTables)
                                    }

                                    // 要素のitemを表示
                                    return(
                                        <div key={index}>
                                            { listIndex < 6 ?
                                                <div id={`itemText + ${listIndex} + ${index}`} onClick={ClickItem} className={styles.item}>
                                                    { data }
                                                </div>
                                                :
                                                <div style={{display: 'none'}}>

                                                </div>
                                            }
                                        </div>
                                    )
                                }
                                ) }
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlockMain