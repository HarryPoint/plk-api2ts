import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产统计相关/getQualityStatisticUsingPOST
*/
export default function fetchMethod(options: { data: IUserProductionStatisticsSearchVO }, extraOptions?: any) {
    return http<IJSONResultListReturnsVOToTheUserInspectionStatistics>(
        {
            url: "/app-mobile-web/api/app/mobile/produceReport/getQualityStatistic",
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
    materialIds?: string[];
    /** 工序id集合 */
    processIds?: string[];
    /** 生产任务类型 */
    produceTaskTypeList?: EUserProductionStatisticsSearchVO_produceTaskTypeList_items[];
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
    ts?: string;
}
/** 用户质检统计返回VO */
export interface IUserInspectionStatisticsReturnVO {
    /** 所属员工id */
    userId?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 工序id */
    processId?: string;
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

export enum EUserProductionStatisticsSearchVO_produceTaskTypeList_items {
    PRODUCE = "PRODUCE",
    BACK = "BACK"
}
