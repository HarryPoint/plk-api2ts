import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/员工工序相关/getUserProcessAndAreaSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; type?: Etype } }, extraOptions?: any) {
    return http<ITheJSONResultListAreaOperationSelectsToReturnVO>(
        {
            url: "/masterdata-service/userProcess/getUserProcessAndAreaSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«区域工序选择返回VO»» */
export interface ITheJSONResultListAreaOperationSelectsToReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheRegionalOperationSelectionReturnsVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 区域工序选择返回VO */
export interface ITheRegionalOperationSelectionReturnsVO {
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

export enum Etype {
    PRODUCE = "PRODUCE",
    QUALITY = "QUALITY"
}
