import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/物料库存维度报表相关/getWarehouseMaterialDimensionReportStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultQueriesResponseObjectsInTheInventoryDimension>(
        {
            url: "/masterdata-service/warehouseMaterialDimensionReport/getWarehouseMaterialDimensionReportStatistics",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«物料库存维度查询响应对象» */
export interface IJSONResultQueriesResponseObjectsInTheInventoryDimension {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQueryResponseObjectsFromTheMaterialInventoryDimension;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料库存维度查询响应对象 */
export interface IQueryResponseObjectsFromTheMaterialInventoryDimension {
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
}
