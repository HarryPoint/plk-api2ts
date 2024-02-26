import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/getListByIdsAndFlowPathIdUsingPOST
*/
export default function fetchMethod(options: { data: IListDataQueryVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getListByIdsAndFlowPathId",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** ListDataQueryVO */
export interface IListDataQueryVO {
    /** 流程id */
    flowPathId?: number;
    /** 是否是明细表 */
    isDetailTable?: ('Y' | 'N');
    /** 主数据ids */
    masterDataIds?: number[];
    /** 明细表格字段id集合 */
    detailFlowPathFormFieldIds?: number[];
    /** 明细表格字段serialNo集合 */
    detailFlowPathFormFieldSerialNos?: string[];
}
/** JSONResult«List«JSONObject»» */
export interface IJSONResultListJSONObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IJSONObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** JSONObject */
export interface IJSONObject {
}
