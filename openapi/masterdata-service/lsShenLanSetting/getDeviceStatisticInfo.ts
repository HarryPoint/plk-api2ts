import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/深蓝大屏相关/getShenLanDeviceStatisticInfoUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultDarkBlueDeviceStatisticalResponseVO>(
        {
            url: "/masterdata-service/lsShenLanSetting/getDeviceStatisticInfo",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«深蓝设备统计响应VO» */
export interface IJSONResultDarkBlueDeviceStatisticalResponseVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDeepBlueDeviceStatisticalResponseVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 深蓝设备统计响应VO */
export interface IDeepBlueDeviceStatisticalResponseVO {
    /** 左、中、右-设备运行信息 */
    deviceRunInfos?: Record<string, IDeepBlueDeviceOperationMessageRespondsToVO>;
    /** 报警信息-右上 */
    alarmInfos?: IDeepBlueAlarmStatisticsVO[];
    /** 今日生产情况-右下 */
    produceInfos?: IDeepBlueEquipmentComprehensiveEfficiencyResponseVO1[];
    /** 在线结点数/节点率-右下 */
    onlineInfos?: IDeepBlueDevicesRespondToVOWhenOnline[];
}
/** 深蓝设备运行信息响应VO */
export interface IDeepBlueDeviceOperationMessageRespondsToVO {
    /** 设备运行进度信息 */
    runProcesses?: IDeepBlueDeviceRunningProgressInformationRespondsToVO[];
    /** 设备今日运行统计 */
    todayRun?: IDeepBlueDeviceOperationStatisticsResponseVO;
    /** 设备昨日运行统计 */
    yesterdayRun?: IDeepBlueDeviceOperationStatisticsResponseVO;
    /** 设备本周运行统计 */
    weekRun?: IDeepBlueDeviceOperationStatisticsResponseVO;
    /** 设备上周运行统计 */
    preWeekRun?: IDeepBlueDeviceOperationStatisticsResponseVO;
    /** 设备综合效率 */
    deviceEfficiencies?: IDeepBlueEquipmentComprehensiveEfficiencyResponseVO;
}
/** 深蓝设备运行进度信息响应VO */
export interface IDeepBlueDeviceRunningProgressInformationRespondsToVO {
    /** 设备id */
    deviceId?: number;
    /** 设备编码 */
    deviceCode?: string;
    /** 设备名称 */
    deviceName?: string;
    /** OEE */
    oee?: number;
    /** 进给速度/主轴转速 */
    speed?: number;
    /** 加工产量 */
    produceQty?: number;
    /** 正常运行时间 */
    normalRunningTime?: number;
    /** 停机时间 */
    stopTime?: number;
    /** 当前执行程序名称 */
    currentToolName?: string;
    /** 进给倍率 */
    feedRatio?: number;
}
/** 深蓝设备运行统计响应VO */
export interface IDeepBlueDeviceOperationStatisticsResponseVO {
    /** 平均出件耗时 */
    averageTime?: number;
    /** 加工产量 */
    produceQty?: number;
    /** 正常运行时间 */
    normalRunningTime?: number;
    /** 停机时间 */
    stopTime?: number;
    /** 在线时间 */
    onlineTime?: number;
}
/** 深蓝设备综合效率响应VO */
export interface IDeepBlueEquipmentComprehensiveEfficiencyResponseVO {
    /** 类型设备正常运行时间和 */
    totalNormalRunningTime?: number;
    /** 类型设备工作时间和 */
    totalTime?: number;
}
/** 深蓝报警统计信息VO */
export interface IDeepBlueAlarmStatisticsVO {
    /** 报警时间 */
    date?: string;
    /** 报警设备id */
    deviceId?: number;
    /** 报警设备编码 */
    deviceCode?: string;
    /** 报警设备名称 */
    deviceName?: string;
    /** 报警信息 */
    alarmInfo?: string;
}
/** 深蓝设备综合效率响应VO_1 */
export interface IDeepBlueEquipmentComprehensiveEfficiencyResponseVO1 {
    /** 序号 */
    serialNo?: number;
    /** 生产订单编号 */
    productOrderNo?: string;
    /** 产品名称 */
    productName?: string;
    /** 产品规格 */
    productSpec?: string;
    /** 数量 */
    productQuantity?: number;
    /** 交期 */
    deliveryDate?: string;
    /** 订单完成进度 */
    completeRatio?: number;
}
/** 深蓝设备在线情况响应VO */
export interface IDeepBlueDevicesRespondToVOWhenOnline {
    /** 日期 */
    date?: string;
    /** 每日在线率 */
    onlineRate?: number;
    /** 每日离线率 */
    offlineRate?: number;
}
