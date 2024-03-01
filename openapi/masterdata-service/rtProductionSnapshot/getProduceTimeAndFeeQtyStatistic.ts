import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getProduceTimeAndFeeQtyStatisticUsingPOST
*/
export default function fetchMethod(options: { data: IUserProductionStatisticsSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultStatisticsOnLaborCostReturnedToVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getProduceTimeAndFeeQtyStatistic",
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
/** JSONResult«工时工费统计返回VO» */
export interface IJSONResultStatisticsOnLaborCostReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IStatisticsOnTimeSpentAreReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工时工费统计返回VO */
export interface IStatisticsOnTimeSpentAreReturnedToVO {
    /** 总参考工费 */
    totalFee?: number;
    /** 总参考工时 */
    totalTime?: number;
}

export enum EUserProductionStatisticsSearchVO_produceTaskTypeList_items {
    PRODUCE = "PRODUCE",
    BACK = "BACK"
}
