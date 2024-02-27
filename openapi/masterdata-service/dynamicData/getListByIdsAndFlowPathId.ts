import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/getListByIdsAndFlowPathIdUsingPOST
*/
export default function fetchMethod(options: { data: IListDataQueryVO, params: { enterpriseId?: string } }, extraOptions?: any) {
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
    flowPathId?: string;
    /** 是否是明细表 */
    isDetailTable?: EListDataQueryVO_isDetailTable;
    /** 主数据ids */
    masterDataIds?: string[];
    /** 明细表格字段id集合 */
    detailFlowPathFormFieldIds?: string[];
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
    ts?: string;
}
/** JSONObject */
export interface IJSONObject {
}

export enum EListDataQueryVO_isDetailTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
