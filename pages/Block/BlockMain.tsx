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
        [N,N,B,W,N,N],
        [N,N,W,B,N,N],
        [N,N,N,N,N,N],
        [N,N,N,N,N,N],
    ];

    const [dataTables,setDataTables] = useState<(number|null)[][]>(tables)

    function Test(): any{

    }
    
    return (
        <div className={styles.BlockMain}>
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
                                        
                                        // クリックしたら要素をnullから変更
                                        setDataTables((prevState) => [...prevState,datas.splice(index,1,W)])
                                        
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