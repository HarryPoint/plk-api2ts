import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16700/doc.html#/default/费用分配相关/getDynamicDataHeaderUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProductionCostAllocationDynamicTableHeaderResponseObject>(
        {
            url: "/masterdata-service/produceFeeAssign/getDynamicDataHeader",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产成本分配动态表头响应对象»» */
export interface IJSONResultListProductionCostAllocationDynamicTableHeaderResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionCostAllocationDynamicTableHeaderResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产成本分配动态表头响应对象 */
export interface IProductionCostAllocationDynamicTableHeaderResponseObject {
    /** 费用类型id */
    produceFeeTypeId?: string;
    /** 费用类型code */
    produceFeeTypeCode?: string;
    /** 费用类型name */
    produceFeeTypeName?: string;
}
