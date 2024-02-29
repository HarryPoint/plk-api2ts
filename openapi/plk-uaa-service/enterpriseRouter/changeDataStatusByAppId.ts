import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.139.107:18100/doc.html#/default/企业路由相关/changeDataStatusByAppIdUsingPOST
*/
export default function fetchMethod(options: { data: ITheEnterpriseRouteRequestsTheDTOToChangeTheDataStatusBasedOnTheApplicationId }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/enterpriseRouter/changeDataStatusByAppId",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 企业路由根据应用id变更数据状态请求 DTO */
export interface ITheEnterpriseRouteRequestsTheDTOToChangeTheDataStatusBasedOnTheApplicationId {
    /** 应用id */
    appId?: string;
    /** 数据状态 */
    dataStatus?: number;
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
    ts?: string;
}
