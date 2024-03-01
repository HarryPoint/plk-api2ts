import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getUserProduceStatisticUsingPOST
*/
export default function fetchMethod(options: { data: IUserProductionStatisticsSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListUserProductionStatisticsReturnVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getUserProduceStatistic",
            method: "POST",
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
    /** 生产订单编码 */
    produceOrderCode?: string;
    /** 生产任务类型 */
    produceTaskTypeList?: EUserProductionStatisticsSearchVO_produceTaskTypeList_items[];
}
/** JSONResult«List«用户生产统计返回VO»» */
export interface IJSONResultListUserProductionStatisticsReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IUserProductionStatisticsReturnVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 用户生产统计返回VO */
export interface IUserProductionStatisticsReturnVO {
    /** 返工产出参考工费 */
    backFee?: number;
    /** 返工产出参考工时 */
    backTaskTime?: number;
    /** 记录时间 */
    createTime?: number;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 工序编号 */
    processCode?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 合格产出参考工费 */
    produceFee?: number;
    /** 生产订单编码 */
    produceOrderCode?: string;
    /** 合格产出参考工时 */
    produceTaskTime?: number;
    /** 总返工个数 */
    totalBackQuantity?: number;
    /** 总暂扣品个数 */
    totalHoldPauseQuantity?: number;
    /** 总生产进料个数 */
    totalProduceMoveInQuantity?: number;
    /** 总合格产出个数 */
    totalProduceQuantity?: number;
    /** 总报废个数 */
    totalScrapQuantity?: number;
    /** 快照类型 */
    type?: EUserProductionStatisticsReturnVO_type;
    /** 所属员工id */
    userId?: string;
}

export enum EUserProductionStatisticsSearchVO_produceTaskTypeList_items {
    PRODUCE = "PRODUCE",
    BACK = "BACK"
}

export enum EUserProductionStatisticsReturnVO_type {
    /** 合格产出 */
    PRODUCE = "PRODUCE",
    /** 报废 */
    SCRAP = "SCRAP",
    /** 返工产出 */
    BACK = "BACK",
    /** 委外 */
    ENTRUST = "ENTRUST",
    /** 生产进料 */
    PRODUCE_MOVE_IN = "PRODUCE_MOVE_IN",
    /** 返工进料 */
    BACK_MOVE_IN = "BACK_MOVE_IN",
    /** 返工审批 */
    BACK_APPROVE = "BACK_APPROVE",
    /** 扣留返工 */
    HOLD_BACK = "HOLD_BACK",
    /** 暂扣返工 */
    HOLD_PAUSE_BACK = "HOLD_PAUSE_BACK"
}
