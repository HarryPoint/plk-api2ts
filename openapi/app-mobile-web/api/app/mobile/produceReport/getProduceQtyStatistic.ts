import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/生产统计相关/getProduceQtyStatisticUsingPOST
export default function fetchMethod(data: IUserProductionStatisticsSearchVO) {
    return http<IJSONResultTotalUserProductionStatisticsReturnVO>({
        url: "/app-mobile-web/api/app/mobile/produceReport/getProduceQtyStatistic",
        method: "post",
        data,
    });
}
// 用户生产统计搜索VO
export interface IUserProductionStatisticsSearchVO {
    // 查询开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 查询结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 物料id集合
    materialIds: number[];
    // 工序id集合
    processIds: number[];
    // 生产任务类型
    produceTaskTypeList: string[];
    // 生产订单编码
    produceOrderCode: string;
}
// JSONResult«用户生产合计统计返回VO»
export interface IJSONResultTotalUserProductionStatisticsReturnVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IUserProductionTotalStatisticsAreReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 用户生产合计统计返回VO
export interface IUserProductionTotalStatisticsAreReturnedToVO {
    // 总进料个数
    totalProduceMoveInQuantity: number;
    // 总合格产出个数
    totalProduceQuantity: number;
    // 总返工个数
    totalBackQuantity: number;
    // 总报废个数
    totalScrapQuantity: number;
    // 总暂扣品个数
    totalHoldPauseQuantity: number;
}
