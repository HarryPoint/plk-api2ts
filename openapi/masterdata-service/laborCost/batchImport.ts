import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/工费相关/batchImportUsingPOST_2
*/
export default function fetchMethod(options: { data: ILaborCostsSaveDTO[] }, extraOptions?: any) {
    return http<IJSONResultListString>(
        {
            url: "/masterdata-service/laborCost/batchImport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工费保存DTO */
export interface ILaborCostsSaveDTO {
    /** 返工产出工费单价（元） */
    backProducePrice?: number;
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 关联物料id */
    materialIds: string[];
    /** 名称 */
    name: string;
    /** 关联工序id */
    processIds: string[];
    /** 合格产出工费单价（元） */
    producePrice?: number;
    /** 准备工费（元） */
    readyPrice?: number;
}
/** JSONResult«List«string»» */
export interface IJSONResultListString {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
