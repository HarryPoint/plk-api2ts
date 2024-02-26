import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/企业路由相关/editForAppUsingPOST
*/
export default function fetchMethod(options: { data: IApplyTheEnterpriseRouteEditRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterpriseRouter/editForApp",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 应用企业路由编辑请求 DTO */
export interface IApplyTheEnterpriseRouteEditRequestDTO {
    /** 应用id */
    appId?: number;
    /** 应用名称 */
    appName?: string;
    /** 应用编码 */
    appCode?: string;
    /** 是否是系统应用 */
    isSystem?: string;
    /** 应用类型 */
    appSystemType?: string;
    /** 发布到的企业路由id集 */
    enterpriseRouterPublishRequestList?: IEnterpriseRouterPublishRequestDTO[];
    /** 服务对象ID */
    serviceObjectId?: number;
    /** 服务对象Code */
    serviceObjectCode?: string;
    /** 应用级别 */
    applicationLevel?: string;
}
/** EnterpriseRouterPublishRequestDTO */
export interface IEnterpriseRouterPublishRequestDTO {
    /** 上级路由ID */
    parentRouteId?: number;
    /** 所属排序位置偏移量 */
    sortOffset?: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
