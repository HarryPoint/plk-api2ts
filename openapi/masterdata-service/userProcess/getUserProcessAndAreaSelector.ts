import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工工序相关/getUserProcessAndAreaSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; type?: Etype } }, extraOptions?: any) {
    return http<ITheJSONResultListAreaOperationSelectsToReturnVO>(
        {
            url: "/masterdata-service/userProcess/getUserProcessAndAreaSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«区域工序选择返回VO»» */
export interface ITheJSONResultListAreaOperationSelectsToReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheRegionalOperationSelectionReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 区域工序选择返回VO */
export interface ITheRegionalOperationSelectionReturnsVO {
    /** id */
    id?: number;
    /** 工序名称 */
    name?: string;
    /** 工序编号 */
    code?: string;
    /** 区域id */
    areaId?: number;
    /** 区域名称 */
    areaName?: string;
}

export enum Etype {
    PRODUCE = "PRODUCE",
    QUALITY = "QUALITY"
}
