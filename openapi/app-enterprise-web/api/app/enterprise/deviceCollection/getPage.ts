import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备数采数据概览相关/getPageUsingPOST_3
*/
export default function fetchMethod(options: { data: IDeviceDataOverviewSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationDeviceDataOverviewReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollection/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数据概览搜索VO */
export interface IDeviceDataOverviewSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 设备厂商 */
    firm?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 设备型号 */
    deviceType?: string;
    /** 名称 */
    name?: string;
    /** 设备状态 */
    runningStatus?: EDeviceDataOverviewSearchVO_runningStatus;
    /** 通讯开关状态 */
    apiSwitchStatus?: EDeviceDataOverviewSearchVO_apiSwitchStatus;
    /** 在线状态 */
    onlineStatus?: EDeviceDataOverviewSearchVO_onlineStatus;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«设备数据概览返回VO»» */
export interface IJSONResultPagingInformationDeviceDataOverviewReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationDeviceDataOverviewReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«设备数据概览返回VO» */
export interface IPageInformationDeviceDataOverviewReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IDeviceDataOverviewBackToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationDeviceDataOverviewReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationDeviceDataOverviewReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 设备数据概览返回VO */
export interface IDeviceDataOverviewBackToVO {
    /** id */
    id?: string;
    /** 设备名称 */
    name?: string;
    /** 设备编号 */
    code?: string;
    /** 设备数采方案id */
    deviceCollectionPlanId?: string;
    /** 设备数采方案名称 */
    deviceCollectionPlanName?: string;
    /** 设备数采方案编号 */
    deviceCollectionPlanCode?: string;
    /** 通讯开关状态 */
    apiSwitchStatus?: EDeviceDataOverviewBackToVO_apiSwitchStatus;
    /** 通讯开关状态描述 */
    apiSwitchStatusDesc?: string;
    /** 最后通讯时间 */
    lastApiTime?: number;
    /** 在线状态 */
    onlineStatus?: EDeviceDataOverviewBackToVO_onlineStatus;
    /** 在线状态描述 */
    onlineStatusDesc?: string;
    /** 设备状态 */
    runningStatus?: EDeviceDataOverviewBackToVO_runningStatus;
    /** 设备状态描述 */
    runningStatusDesc?: string;
    /** 所属设备型号类型名称 */
    deviceType?: string;
}

export enum EDeviceDataOverviewSearchVO_runningStatus {
    /** 正常运行 */
    DS1 = "DS1",
    /** 降速运行 */
    DS2 = "DS2",
    /** 故障停机 */
    DS3 = "DS3",
    /** 保养 */
    DS4 = "DS4",
    /** 空闲待用 */
    DS5 = "DS5",
    /** 换型 */
    DS6 = "DS6",
    /** 关机 */
    DS7 = "DS7",
    /** 空运 */
    DS8 = "DS8"
}

export enum EDeviceDataOverviewSearchVO_apiSwitchStatus {
    /** 已开启 */
    ON = "ON",
    /** 已关闭 */
    OFF = "OFF"
}

export enum EDeviceDataOverviewSearchVO_onlineStatus {
    /** 在线 */
    ONLINE = "ONLINE",
    /** 离线 */
    OFFLINE = "OFFLINE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationDeviceDataOverviewReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationDeviceDataOverviewReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDeviceDataOverviewBackToVO_apiSwitchStatus {
    /** 已开启 */
    ON = "ON",
    /** 已关闭 */
    OFF = "OFF"
}

export enum EDeviceDataOverviewBackToVO_onlineStatus {
    /** 在线 */
    ONLINE = "ONLINE",
    /** 离线 */
    OFFLINE = "OFFLINE"
}

export enum EDeviceDataOverviewBackToVO_runningStatus {
    /** 正常运行 */
    DS1 = "DS1",
    /** 降速运行 */
    DS2 = "DS2",
    /** 故障停机 */
    DS3 = "DS3",
    /** 保养 */
    DS4 = "DS4",
    /** 空闲待用 */
    DS5 = "DS5",
    /** 换型 */
    DS6 = "DS6",
    /** 关机 */
    DS7 = "DS7",
    /** 空运 */
    DS8 = "DS8"
}
