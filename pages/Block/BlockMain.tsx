import React, { KeyboardEvent, useEffect, useRef } from 'react'
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

    
    return (
        <div className={styles.BlockMain}>
            <div className={styles.field}>
                <div className={styles.fieldCover}>
                    <div>
                        {/* アルファベットごとに分ける */}
                        { tables.map((datas,listIndex) =>

                            <div key={listIndex} className={styles.displayFlex}>

                                {/* アルファベットごとに分ける */}
                                { datas.map((data,index) => {

                                    // 要素のitemを取得(例:A1)
                                    const ClickItem = () => {
                                        const text = document.getElementById(`itemText + ${listIndex} + ${index}`)?.innerText
                                        
                                        const itemPosition : null|number = tables[listIndex][index]
                                        datas.splice(index,1,W)
                                        console.log(datas)
                                    }

                                    // 要素のitemを表示
                                    return(
                                        <div key={index} id={`itemText + ${listIndex} + ${index}`} onClick={ClickItem} className={styles.item}>
                                            { data }
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