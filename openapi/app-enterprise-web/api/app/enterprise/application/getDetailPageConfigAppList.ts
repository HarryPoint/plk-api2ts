import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/应用相关/getDetailPageConfigAppListUsingGET
*/
export default function fetchMethod(params: { id?: number }, extraOptions?: any) {
    return http<IJSONResultFlowPathDetailPageConfigAppResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/application/getDetailPageConfigAppList",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«FlowPathDetailPageConfigAppResponseDTO» */
export interface IJSONResultFlowPathDetailPageConfigAppResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathDetailPageConfigAppResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** FlowPathDetailPageConfigAppResponseDTO */
export interface IFlowPathDetailPageConfigAppResponseDTO {
    /** app列表 */
    appList?: IFlowPathDetailPageConfigItem[];
}
/** FlowPathDetailPageConfigItem */
export interface IFlowPathDetailPageConfigItem {
    /** 详细页配置ID */
    id?: number;
    /** App/FlowPath的ID */
    appId?: number;
    /** App/FlowPath编号 */
    appCode?: string;
    /** App/FlowPath名称 */
    appName?: string;
    /** 页签名称/别名 */
    aliasName?: string;
    /** App/FlowPath类型 */
    appType?: string;
}
