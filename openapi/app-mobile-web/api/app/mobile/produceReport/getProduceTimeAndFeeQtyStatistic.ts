import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产统计相关/getProduceTimeAndFeeQtyStatisticUsingPOST
*/
export default function fetchMethod(data: IUserProductionStatisticsSearchVO, extraOptions?: any) {
    return http<IJSONResultStatisticsOnLaborCostReturnedToVO>(
        {
            url: "/app-mobile-web/api/app/mobile/produceReport/getProduceTimeAndFeeQtyStatistic",
            method: "post",
            data,
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
    materialIds: number[];
    /** 工序id集合 */
    processIds: number[];
    /** 生产任务类型 */
    produceTaskTypeList: string[];
    /** 生产订单编码 */
    produceOrderCode: string;
}
/** JSONResult«工时工费统计返回VO» */
export interface IJSONResultStatisticsOnLaborCostReturnedToVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IStatisticsOnTimeSpentAreReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 工时工费统计返回VO */
export interface IStatisticsOnTimeSpentAreReturnedToVO {
    /** 总参考工时 */
    totalTime: number;
    /** 总参考工费 */
    totalFee: number;
}
