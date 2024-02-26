import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/仓库盘点任务相关/verifyUsingPOST
*/
export default function fetchMethod(data: ICheckTheDTOForInventoryTasks, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/storageTakeCheckTask/verify",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 盘点任务核对DTO */
export interface ICheckTheDTOForInventoryTasks {
    /** 编辑模式 -- (暂存就传递STAGING, 提交就传递 DEFAULT) */
    editType: string;
    /** 任务id */
    id: number;
    /** 盘点核对详情 */
    detailList: IInventoryTaskCheckDetailsDTO[];
}
/** 盘点任务核对详情DTO */
export interface IInventoryTaskCheckDetailsDTO {
    /** 详情id */
    id: number;
    /** 核对数量 */
    verifyQuantity: number;
    /** 差异原因 */
    differenceReason: string;
    /** 序列号集 */
    serialNos: IInventoryTaskInventoryDetailSerialNumberDTO1[];
}
/** 盘点任务盘点明细序列号DTO_1 */
export interface IInventoryTaskInventoryDetailSerialNumberDTO1 {
    /** 序列号 */
    serialNo: string;
    /** 备注 */
    serialRemark: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
