import React, { KeyboardEvent, useEffect, useRef } from 'react'
import styles from '../../styles/block.module.scss'

function BlockMain() {

    // オセロの位置
    const tables: string[][] = [
        ['A1','A2','A3','A4','A5','A6'],
        ['B1','B2','B3','B4','B5','B6'],
        ['C1','C2','C3','C4','C5','C6'],
        ['D1','D2','D3','D4','D5','D6'],
        ['E1','E2','E3','E4','E5','E6'],
        ['F1','F2','F3','F4','F5','F6'],
    ];

    // const aaa: any = function Table(){
    //     for (let index = 0; index < tables.length; index++) {
    //         const elements = tables[index];
    //         for (let index = 0; index < elements.length; index++) {
    //             const element = elements[index];
    //             return element
    //         }
    //     }
    // }

    return (
        <div className={styles.BlockMain}>
            <div className={styles.field}>
                <div className={styles.fieldCover}>
                    <div>
                        { tables.map((datas,index) => 
                            <div key={index} className={styles.displayFlex}>
                                { datas.map((data,index) => 
                                    <div key={index} className={styles.item}>
                                        { data }
                                    </div>
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