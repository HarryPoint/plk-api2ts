import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16700/doc.html#/default/销售明细报表相关/getDifengSalesInvoiceTypeListUsingPOST
*/
export default function fetchMethod(options: { data: INameNumberDTO }, extraOptions?: any) {
    return http<IJSONResultListIdCodeNameACommonTransferObject>(
        {
            url: "/masterdata-service/salesDetailsReport/getDifengSalesInvoiceTypeList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 名称、编号DTO */
export interface INameNumberDTO {
    /** 名称or编号 */
    nameOrCode?: string;
}
/** JSONResult«List«Id Code Name 通用传输对象»» */
export interface IJSONResultListIdCodeNameACommonTransferObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IIdCodeNameGenericTransportObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: string;
    /** code */
    code?: string;
    /** name */
    name?: string;
}
