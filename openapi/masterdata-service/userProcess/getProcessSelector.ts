import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工工序相关/getProcessSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; type?: Etype } }, extraOptions?: any) {
    return http<ITheJSONResultListOperationSelectsToReturnVO1>(
        {
            url: "/masterdata-service/userProcess/getProcessSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工序选择返回VO»»_1 */
export interface ITheJSONResultListOperationSelectsToReturnVO1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcedureSelectionReturnsVO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工序选择返回VO_1 */
export interface IProcedureSelectionReturnsVO1 {
    /** id */
    id?: string;
    /** 工序名称 */
    name?: string;
    /** 工序编号 */
    code?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
}

export enum Etype {
    PRODUCE = "PRODUCE",
    QUALITY = "QUALITY"
}
