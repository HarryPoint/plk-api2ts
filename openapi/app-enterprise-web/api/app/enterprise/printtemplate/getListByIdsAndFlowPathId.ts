import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/打印模板相关/getListByIdsAndFlowPathIdUsingPOST
*/
export default function fetchMethod(options: { data: IPrintTemplateDataQueryObjects }, extraOptions?: any) {
    return http<IJSONResultListJSONObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/printtemplate/getListByIdsAndFlowPathId",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 打印模板数据查询对象 */
export interface IPrintTemplateDataQueryObjects {
    /** 数据id集合 */
    masterDataIds?: string[];
    /** 明细表格字段id集合 */
    detailFlowPathFormFieldIds?: string[];
    /** 数据源id */
    dataSourceId?: string;
    /** 打印模板id */
    printTemplateId?: string;
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
