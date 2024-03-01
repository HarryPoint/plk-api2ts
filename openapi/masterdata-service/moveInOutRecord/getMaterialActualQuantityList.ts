import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/进出料记录管理/getMaterialActualQuantityListUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialOutputSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListMaterialOutputVO>(
        {
            url: "/masterdata-service/moveInOutRecord/getMaterialActualQuantityList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料产出搜索VO */
export interface IMaterialOutputSearchVO {
    /** 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序步骤ids */
    routingStepIds: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«物料产出VO»» */
export interface IJSONResultListMaterialOutputVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialOutputVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料产出VO */
export interface IMaterialOutputVO {
    /** 物料产出(出站总数量) */
    actualQuantity?: number;
    /** 物料id */
    materialId?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
