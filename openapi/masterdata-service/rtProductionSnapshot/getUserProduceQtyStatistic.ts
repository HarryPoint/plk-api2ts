import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getUserProduceQtyStatisticUsingPOST
*/
export default function fetchMethod(options: { data: IUserProductionStatisticsSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultTotalUserProductionStatisticsReturnVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getUserProduceQtyStatistic",
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
/** JSONResult«用户生产合计统计返回VO» */
export interface IJSONResultTotalUserProductionStatisticsReturnVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IUserProductionTotalStatisticsAreReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 用户生产合计统计返回VO */
export interface IUserProductionTotalStatisticsAreReturnedToVO {
    /** 总返工个数 */
    totalBackQuantity?: number;
    /** 总暂扣品个数 */
    totalHoldPauseQuantity?: number;
    /** 总进料个数 */
    totalProduceMoveInQuantity?: number;
    /** 总合格产出个数 */
    totalProduceQuantity?: number;
    /** 总报废个数 */
    totalScrapQuantity?: number;
}

export enum EUserProductionStatisticsSearchVO_produceTaskTypeList_items {
    PRODUCE = "PRODUCE",
    BACK = "BACK"
}
