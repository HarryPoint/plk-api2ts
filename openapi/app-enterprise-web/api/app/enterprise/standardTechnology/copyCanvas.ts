import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺相关/copyCanvasUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessCanvasCopyRequestObject }, extraOptions?: any) {
    return http<IJSONResultStandardProcessCanvasResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnology/copyCanvas",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺画布复制请求对象 */
export interface IStandardProcessCanvasCopyRequestObject {
    /** 标准工艺id */
    standardTechnologyId: string;
}
/** JSONResult«标准工艺画布响应对象» */
export interface IJSONResultStandardProcessCanvasResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStandardProcessCanvasResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 标准工艺画布响应对象 */
export interface IStandardProcessCanvasResponseObject {
    /** 标准工艺id */
    standardTechnologyId?: string;
    /** 标准工艺名称 */
    standardTechnologyName?: string;
    /** 标准工艺类型 */
    standardTechnologyType?: EStandardProcessCanvasResponseObject_standardTechnologyType;
    /** 标准工艺状态 */
    standardTechnologyStatus?: EStandardProcessCanvasResponseObject_standardTechnologyStatus;
    /** 所属分类id */
    standardTechnologyCategoryId?: string;
    /** 所属分类名称 */
    standardTechnologyCategoryName?: string;
    /** 物料id(该工艺对应的物料id -- 针对具体物料类型有值) */
    materialId?: string;
    /** 条件组id(该标准工艺对应的条件组id -- 针对某一类别的有值) */
    standardTechnologyConditionGroupId?: string;
    /** 条件来源应用编号(该标准工艺里面的条件字段 只有一个来源) */
    conditionFromFlowPathCode?: string;
    /** 条件来源应用名称(该标准工艺里面的条件字段 只有一个来源) */
    conditionFromFlowPathName?: string;
    /** 标准工艺节点响应对象 */
    nodeResponse?: IStandardProcessNodeResponseObject;
    /** 标准工艺画布快照 草稿状态时有值 */
    canvasSnapshot?: Record<string, Record<string, any>>;
}
/** 标准工艺节点响应对象 */
export interface IStandardProcessNodeResponseObject {
    /** 标准工艺id */
    standardTechnologyId?: string;
    /** 节点id */
    nodeId?: string;
    /** 前一节点id */
    prevNodeId?: string;
    /** 后一节点id */
    nextNodeId?: string;
    /** 所属分支节点id */
    branchNodeId?: string;
    /** 节点序列号 */
    serialNo?: string;
    /** 节点名称 */
    name?: string;
    /** 节点类型 */
    type?: EStandardProcessNodeResponseObject_type;
    /** 配置类型 */
    configType?: EStandardProcessNodeResponseObject_configType;
    /** 分支类型 -- 只有分支节点才会有值 */
    branchType?: EStandardProcessNodeResponseObject_branchType;
    /** 节点数据 -- 不同的节点类型的数据格式不一样 */
    nodeData?: Record<string, Record<string, any>>;
    /** 下一节点 */
    nextNode?: IStandardProcessNodeResponseObject;
    /** 分支节点列表 */
    branches?: IStandardProcessNodeResponseObject[];
}

export enum EStandardProcessCanvasResponseObject_standardTechnologyType {
    /** 具体物料 */
    SPECIFIC_MATERIAL = "SPECIFIC_MATERIAL",
    /** 某一类别 */
    CONFIG_MATERIAL = "CONFIG_MATERIAL"
}

export enum EStandardProcessCanvasResponseObject_standardTechnologyStatus {
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 已启用 */
    VALID = "VALID",
    /** 已停用 */
    INVALID = "INVALID"
}

export enum EStandardProcessNodeResponseObject_type {
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 工艺路径 */
    ROUTING = "ROUTING",
    /** 条件 */
    CONDITION = "CONDITION",
    /** 分支 */
    BRANCH = "BRANCH"
}

export enum EStandardProcessNodeResponseObject_configType {
    /** 具体 */
    SPECIFIC = "SPECIFIC",
    /** 配置 */
    CONFIGURED = "CONFIGURED"
}

export enum EStandardProcessNodeResponseObject_branchType {
    /** BOM */
    BOM = "BOM",
    /** 条件 */
    CONDITION = "CONDITION"
}
