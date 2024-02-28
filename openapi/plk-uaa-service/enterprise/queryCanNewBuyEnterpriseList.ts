import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/queryCanNewBuyEnterpriseListUsingPOST
*/
export default function fetchMethod(options: { data: IProductOrderEnterpriseQueryRequestObject }, extraOptions?: any) {
    return http<IJSONResultListEnterpriseNameNumberResponseObject>(
        {
            url: "/plk-uaa-service/enterprise/queryCanNewBuyEnterpriseList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产品订单企业查询请求对象 */
export interface IProductOrderEnterpriseQueryRequestObject {
    /** 名称或者编号 */
    nameOrCode?: string;
}
/** JSONResult«List«企业名称编号响应对象»» */
export interface IJSONResultListEnterpriseNameNumberResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBusinessNameNumberResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 企业名称编号响应对象 */
export interface IBusinessNameNumberResponseObject {
    /** 企业id */
    id?: string;
    /** 企业名称 */
    name?: string;
    /** 企业编号 */
    code?: string;
}
