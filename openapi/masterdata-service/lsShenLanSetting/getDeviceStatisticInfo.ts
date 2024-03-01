import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/深蓝大屏相关/getShenLanDeviceStatisticInfoUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultDarkBlueDeviceStatisticalResponseVO>(
        {
            url: "/masterdata-service/lsShenLanSetting/getDeviceStatisticInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«深蓝设备统计响应VO» */
export interface IJSONResultDarkBlueDeviceStatisticalResponseVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDeepBlueDeviceStatisticalResponseVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 深蓝设备统计响应VO */
export interface IDeepBlueDeviceStatisticalResponseVO {
    /** 报警信息-右上 */
    alarmInfos?: IDeepBlueAlarmStatisticsVO[];
    /** 左、中、右-设备运行信息 */
    deviceRunInfos?: Record<string, IDeepBlueDeviceOperationMessageRespondsToVO>;
    /** 在线结点数/节点率-右下 */
    onlineInfos?: IDeepBlueDevicesRespondToVOWhenOnline[];
    /** 今日生产情况-右下 */
    produceInfos?: IDeepBlueEquipmentComprehensiveEfficiencyResponseVO1[];
}
/** 深蓝报警统计信息VO */
export interface IDeepBlueAlarmStatisticsVO {
    /** 报警信息 */
    alarmInfo?: string;
    /** 报警时间 */
    date?: number;
    /** 报警设备编码 */
    deviceCode?: string;
    /** 报警设备id */
    deviceId?: string;
    /** 报警设备名称 */
    deviceName?: string;
}
/** 深蓝设备运行信息响应VO */
export interface IDeepBlueDeviceOperationMessageRespondsToVO {
    /** 设备综合效率 */
    deviceEfficiencies?: IDeepBlueEquipmentComprehensiveEfficiencyResponseVO;
    /** 设备上周运行统计 */
    preWeekRun?: IDeepBlueDeviceOperationStatisticsResponseVO;
    /** 设备运行进度信息 */
    runProcesses?: IDeepBlueDeviceRunningProgressInformationRespondsToVO[];
    /** 设备今日运行统计 */
    todayRun?: IDeepBlueDeviceOperationStatisticsResponseVO;
    /** 设备本周运行统计 */
    weekRun?: IDeepBlueDeviceOperationStatisticsResponseVO;
    /** 设备昨日运行统计 */
    yesterdayRun?: IDeepBlueDeviceOperationStatisticsResponseVO;
}
/** 深蓝设备综合效率响应VO */
export interface IDeepBlueEquipmentComprehensiveEfficiencyResponseVO {
    /** 类型设备正常运行时间和 */
    totalNormalRunningTime?: string;
    /** 类型设备工作时间和 */
    totalTime?: string;
}
/** 深蓝设备运行统计响应VO */
export interface IDeepBlueDeviceOperationStatisticsResponseVO {
    /** 平均出件耗时 */
    averageTime?: number;
    /** 正常运行时间 */
    normalRunningTime?: string;
    /** 在线时间 */
    onlineTime?: string;
    /** 加工产量 */
    produceQty?: string;
    /** 停机时间 */
    stopTime?: string;
}
/** 深蓝设备运行进度信息响应VO */
export interface IDeepBlueDeviceRunningProgressInformationRespondsToVO {
    /** 当前执行程序名称 */
    currentToolName?: string;
    /** 设备编码 */
    deviceCode?: string;
    /** 设备id */
    deviceId?: string;
    /** 设备名称 */
    deviceName?: string;
    /** 进给倍率 */
    feedRatio?: number;
    /** 正常运行时间 */
    normalRunningTime?: string;
    /** OEE */
    oee?: number;
    /** 加工产量 */
    produceQty?: string;
    /** 进给速度/主轴转速 */
    speed?: string;
    /** 停机时间 */
    stopTime?: string;
}
/** 深蓝设备在线情况响应VO */
export interface IDeepBlueDevicesRespondToVOWhenOnline {
    /** 日期 */
    date?: string;
    /** 每日离线率 */
    offlineRate?: number;
    /** 每日在线率 */
    onlineRate?: number;
}
/** 深蓝设备综合效率响应VO_1 */
export interface IDeepBlueEquipmentComprehensiveEfficiencyResponseVO1 {
    /** 订单完成进度 */
    completeRatio?: number;
    /** 交期 */
    deliveryDate?: number;
    /** 产品名称 */
    productName?: string;
    /** 生产订单编号 */
    productOrderNo?: string;
    /** 数量 */
    productQuantity?: number;
    /** 产品规格 */
    productSpec?: string;
    /** 序号 */
    serialNo?: number;
}
