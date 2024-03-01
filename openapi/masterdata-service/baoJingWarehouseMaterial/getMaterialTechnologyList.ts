import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/宝晶即时库存查询相关/getMaterialTechnologyListUsingPOST
*/
export default function fetchMethod(options: { params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListNameNumberVO>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/getMaterialTechnologyList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«名称，编号VO»» */
export interface IJSONResultListNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: INameNumberVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 名称，编号VO */
export interface INameNumberVO {
    /** 编号 */
    code: string;
    /** 名称 */
    name: string;
}
