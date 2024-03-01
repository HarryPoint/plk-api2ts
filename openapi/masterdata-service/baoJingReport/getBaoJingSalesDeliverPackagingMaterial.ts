import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingSalesDeliverPackagingMaterialUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBaoJingSalesDeliveryReportPackageHeadResponseObject>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingSalesDeliverPackagingMaterial",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«宝晶销售发货报表包材表头响应对象» */
export interface IJSONResultBaoJingSalesDeliveryReportPackageHeadResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingSalesDeliveryReportPackageHeadResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶销售发货报表包材表头响应对象 */
export interface IBaojingSalesDeliveryReportPackageHeadResponseObject {
    /** 包材表头 */
    packagingMaterialHeaders?: IIdCodeNameGenericTransportObject[];
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** code */
    code?: string;
    /** id */
    id?: string;
    /** name */
    name?: string;
}
