import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/生产统计相关/getProduceStatisticUsingPOST
export default function fetchMethod(data: IUserProductionStatisticsSearchVO, extraOptions?: any) {
    return http<IJSONResultListUserProductionStatisticsReturnVO>(
        {
            url: "/app-mobile-web/api/app/mobile/produceReport/getProduceStatistic",
            method: "post",
            data,
        },
        extraOptions,
    );
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
// JSONResult«List«用户生产统计返回VO»»
export interface IJSONResultListUserProductionStatisticsReturnVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IUserProductionStatisticsReturnVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 用户生产统计返回VO
export interface IUserProductionStatisticsReturnVO {
    // 所属员工id
    userId: number;
    // 生产订单编码
    produceOrderCode: string;
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 物料单位
    materialUnit: string;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 总合格产出个数
    totalProduceQuantity: number;
    // 总生产进料个数
    totalProduceMoveInQuantity: number;
    // 总返工个数
    totalBackQuantity: number;
    // 总报废个数
    totalScrapQuantity: number;
    // 总暂扣品个数
    totalHoldPauseQuantity: number;
    // 合格产出参考工费
    produceFee: number;
    // 合格产出参考工时
    produceTaskTime: number;
    // 返工产出参考工费
    backFee: number;
    // 返工产出参考工时
    backTaskTime: number;
    // 记录时间
    createTime: string;
    // 快照类型
    type: string;
}
