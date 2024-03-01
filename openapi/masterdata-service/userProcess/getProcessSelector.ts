import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工工序相关/getProcessSelectorUsingGET
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string; Type?: EType } }, extraOptions?: any) {
    return http<ITheJSONResultListOperationSelectsToReturnVO1>(
        {
            url: "/masterdata-service/userProcess/getProcessSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工序选择返回VO»»_1 */
export interface ITheJSONResultListOperationSelectsToReturnVO1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcedureSelectionReturnsVO1[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工序选择返回VO_1 */
export interface IProcedureSelectionReturnsVO1 {
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
    /** 工序编号 */
    code?: string;
    /** id */
    id?: string;
    /** 工序名称 */
    name?: string;
}

export enum EType {
    PRODUCE = "PRODUCE",
    QUALITY = "QUALITY"
}
