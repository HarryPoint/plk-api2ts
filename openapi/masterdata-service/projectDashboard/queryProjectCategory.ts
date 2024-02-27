import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目大屏相关/queryProjectCategoryUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<ITheJSONResultListProjectClassDistributesResponseObjects>(
        {
            url: "/masterdata-service/projectDashboard/queryProjectCategory",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目大类分布响应对象»» */
export interface ITheJSONResultListProjectClassDistributesResponseObjects {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProjectClassDistributesTheResponseObjects[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目大类分布响应对象 */
export interface ITheProjectClassDistributesTheResponseObjects {
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目大类编号 */
    projectCategory?: string;
    /** 分布数量 */
    distributeQuantity?: number;
}
