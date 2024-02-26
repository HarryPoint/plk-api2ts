import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶报表(销售发货分析)相关/getBaoJingSalesDeliverPackagingMaterialUsingGET
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultBaoJingSalesDeliveryReportPackageHeadResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportSalesDeliver/getBaoJingSalesDeliverPackagingMaterial",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«宝晶销售发货报表包材表头响应对象» */
export interface IJSONResultBaoJingSalesDeliveryReportPackageHeadResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBaojingSalesDeliveryReportPackageHeadResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 宝晶销售发货报表包材表头响应对象 */
export interface IBaojingSalesDeliveryReportPackageHeadResponseObject {
    /** 包材表头 */
    packagingMaterialHeaders?: IIdCodeNameGenericTransportObject[];
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: number;
    /** code */
    code?: string;
    /** name */
    name?: string;
}
