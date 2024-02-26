import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产快照相关/getQualityStatisticUsingPOST
*/
export default function fetchMethod(options: { data: IUserProductionStatisticsSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListReturnsVOToTheUserInspectionStatistics>(
        {
            url: "/masterdata-service/rtQualityInspectionSnapshot/getQualityStatistic",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 用户生产统计搜索VO */
export interface IUserProductionStatisticsSearchVO {
    /** 查询开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime: string;
    /** 查询结束时间 yyyy-MM-dd HH:mm:ss */
    endTime: string;
    /** 物料id集合 */
    materialIds?: number[];
    /** 工序id集合 */
    processIds?: number[];
    /** 生产任务类型 */
    produceTaskTypeList?: string[];
    /** 生产订单编码 */
    produceOrderCode?: string;
}
/** JSONResult«List«用户质检统计返回VO»» */
export interface IJSONResultListReturnsVOToTheUserInspectionStatistics {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IUserInspectionStatisticsReturnVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 用户质检统计返回VO */
export interface IUserInspectionStatisticsReturnVO {
    /** 所属员工id */
    userId?: number;
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 工序id */
    processId?: number;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 总质检个数 */
    totalQuantity?: number;
    /** 合格数 */
    passQuantity?: number;
    /** 合格数占比 */
    passQuantityRatio?: number;
    /** 让步接收数 */
    concessionQuantity?: number;
    /** 让步接收数占比 */
    concessionQuantityRatio?: number;
    /** 不合格数 */
    notPassQuantity?: number;
    /** 不合格数占比 */
    notPassQuantityRatio?: number;
}
