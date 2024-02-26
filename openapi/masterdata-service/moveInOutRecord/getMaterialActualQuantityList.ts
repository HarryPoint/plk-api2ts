import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/进出料记录管理/getMaterialActualQuantityListUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialOutputSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListMaterialOutputVO>(
        {
            url: "/masterdata-service/moveInOutRecord/getMaterialActualQuantityList",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 物料产出搜索VO */
export interface IMaterialOutputSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序步骤ids */
    routingStepIds: number[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 时间筛选 - 开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 时间筛选 - 结束 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«List«物料产出VO»» */
export interface IJSONResultListMaterialOutputVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialOutputVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 物料产出VO */
export interface IMaterialOutputVO {
    /** 物料id */
    materialId?: number;
    /** 物料产出(出站总数量) */
    actualQuantity?: number;
}
