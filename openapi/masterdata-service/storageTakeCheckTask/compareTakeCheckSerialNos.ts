import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓库盘点任务相关/compareTakeCheckSerialNosUsingPOST
*/
export default function fetchMethod(options: { data: IInventorySerialNumberComparisonRequestDTO }, extraOptions?: any) {
    return http<IJSONResultInventorySerialNumberComparisonResultDTO>(
        {
            url: "/masterdata-service/storageTakeCheckTask/compareTakeCheckSerialNos",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 盘点序列号比较请求DTO */
export interface IInventorySerialNumberComparisonRequestDTO {
    /** 批次号 */
    lotNo?: string;
    /** 物料id */
    materialId: string;
    /** 序列号集合 */
    serialNos?: IInventoryTaskInventoryDetailSerialNumberDTO1[];
    /** 仓位id */
    warehouseId: string;
}
/** 盘点任务盘点明细序列号DTO_1 */
export interface IInventoryTaskInventoryDetailSerialNumberDTO1 {
    /** 序列号 */
    serialNo?: string;
    /** 备注 */
    serialRemark?: string;
}
/** JSONResult«盘点序列号比较结果DTO» */
export interface IJSONResultInventorySerialNumberComparisonResultDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IInventorySerialNumberComparisonResultsDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 盘点序列号比较结果DTO */
export interface IInventorySerialNumberComparisonResultsDTO {
    /** 盘亏序列号集 */
    lossSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 批次号 */
    lotNo?: string;
    /** 物料id */
    materialId?: string;
    /** 序列号集合 */
    pickSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 盘盈序列号集 */
    profitSerialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 序列号集 */
    serialNos?: IInventoryTaskInventoryDetailsSerialNumberDTO[];
    /** 仓位id */
    warehouseId?: string;
}
/** 盘点任务盘点明细序列号DTO */
export interface IInventoryTaskInventoryDetailsSerialNumberDTO {
    /** 序列号 */
    serialNo?: string;
    /** 备注 */
    serialRemark?: string;
}
