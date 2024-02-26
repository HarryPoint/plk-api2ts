import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/计算方案相关/queryBusinessListUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListServiceQueryResponse>(
        {
            url: "/app-enterprise-web/api/app/enterprise/calculationPlan/queryBusinessList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«业务查询响应»» */
export interface IJSONResultListServiceQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBusinessQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 业务查询响应 */
export interface IBusinessQueryResponse {
    /** 应用ID */
    appId?: number;
    /** 应用编码 */
    appCode?: string;
    /** 业务名称 */
    name?: string;
    /** 表格字段编码 */
    tableFieldCode?: string;
    /** 是否详细流程 */
    isDetailFlow?: string;
}
