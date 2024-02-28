import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺相关/getMaterialRelateStructureUsingGET
*/
export default function fetchMethod(options: { params: { materialId?: string } }, extraOptions?: any) {
    return http<IJSONResultSpecificMaterialDataStructureResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnology/getMaterialRelateStructure",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«具体物料数据结构响应对象» */
export interface IJSONResultSpecificMaterialDataStructureResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheConcreteMaterialDataStructureRespondsToObject1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 具体物料数据结构响应对象_1 */
export interface ITheConcreteMaterialDataStructureRespondsToObject1 {
    /** 主物料id */
    materialId?: string;
    /** 主物料名称 */
    materialName?: string;
    /** 主物料编号 */
    materialCode?: string;
    /** 主物料种类 */
    materialType?: string;
    /** 主物料单位 */
    materialUnit?: string;
    /** 物料BOM */
    materialBomStructure?: IConcreteMaterialDataStructureResponseObject;
    /** 工艺路径 */
    materialRoutingStructure?: ISpecificMaterialNumberAssociatedProcessPathDataStructureResponseObject;
}
/** 具体物料数据结构响应对象 */
export interface IConcreteMaterialDataStructureResponseObject {
    /** bomId */
    bomId?: string;
    /** BOM名称 */
    bomName?: string;
    /** BOM编号 */
    bomCode?: string;
    /** 消耗数量 */
    totalConsumeCount?: number;
    /** Bom物料明细 */
    bomDetailList?: IStandardProcessSpecificMaterialBomDetailObject[];
}
/** 标准工艺具体物料bom详情对象 */
export interface IStandardProcessSpecificMaterialBomDetailObject {
    /** bom明细id */
    bomDetailId?: string;
    /** 子物料id */
    childMaterialId?: string;
    /** 子物料种类 */
    childMaterialType?: string;
    /** 子物料名称 */
    childMaterialName?: string;
    /** 子物料编号 */
    childMaterialCode?: string;
    /** 子物料单位 */
    childMaterialUnit?: string;
    /** 消耗数量 */
    totalConsumeCount?: number;
    /** 子物料信息 */
    childMaterialStructure?: ITheConcreteMaterialDataStructureRespondsToObject1;
}
/** 具体物料数关联工艺路径数据结构响应对象 */
export interface ISpecificMaterialNumberAssociatedProcessPathDataStructureResponseObject {
    /** 工艺路径id */
    routingId?: string;
    /** 工艺路径名称 */
    routingName?: string;
    /** 工艺路径编码 */
    routingCode?: string;
    /** 工艺路径步骤集合 */
    materialRoutingStepList?: ISpecificMaterialNumberAssociatedProcessPathStepDataStructureResponseObject[];
}
/** 具体物料数关联工艺路径步骤数据结构响应对象 */
export interface ISpecificMaterialNumberAssociatedProcessPathStepDataStructureResponseObject {
    /** 工艺路径步骤id */
    routingStepId?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 工序编码 */
    processCode?: string;
    /** 工艺卡 */
    processSheet?: IStandardProcessSpecificProcessCardDetailsObject1;
    /** 关键参数 */
    keyParameter?: IKeyParameterInformationResponseObject;
    /** 产能 */
    capacity?: IProductivityResponseObject;
    /** 工费 */
    laborCost?: ICostResponseObject;
    /** 进出站确认类型 */
    bomConsumeSureType?: ESpecificMaterialNumberAssociatedProcessPathStepDataStructureResponseObject_bomConsumeSureType;
}
/** 标准工艺具体工艺卡详情对象_1 */
export interface IStandardProcessSpecificProcessCardDetailsObject1 {
    /** 工艺卡id */
    processSheetId?: string;
    /** 工艺卡名称 */
    name: string;
    /** 工艺卡编号 */
    code?: string;
    /** 工艺卡明细 */
    processSheetDetailStructureList?: IStandardProcessSpecificProcessCardDetailsObject[];
}
/** 标准工艺具体工艺卡详情对象 */
export interface IStandardProcessSpecificProcessCardDetailsObject {
    /** 明细id */
    id?: string;
    /** 明细类型 */
    type?: EStandardProcessSpecificProcessCardDetailsObject_type;
    /** 明细名称/标题 */
    name: string;
    /** 明细编号 */
    code: string;
    /** 描述内容/备注 */
    remark?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件key */
    fileKey?: string;
    /** 文件完整url */
    fileUrl?: string;
    /** 录入类型 */
    inputType?: EStandardProcessSpecificProcessCardDetailsObject_inputType;
    /** 文本类型 */
    textType?: EStandardProcessSpecificProcessCardDetailsObject_textType;
    /** 文本比较值集 */
    textCompareValueList?: string[];
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 图片最大上传量 */
    imageTotalCount?: number;
    /** 选项集 */
    selectorList?: string[];
}
/** 关键参数信息响应对象 */
export interface IKeyParameterInformationResponseObject {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 关键参数集合 */
    parameterDetailList?: IKeyParameterDetailsResponseObject[];
}
/** 关联下拉响应对象 */
export interface IAssociatedDropDownResponseObjects {
    /** id */
    id?: string;
    /** 显示字段名称 */
    showFieldValue?: string;
}
/** 关键参数信息详情响应对象 */
export interface IKeyParameterDetailsResponseObject {
    /** 字段id */
    id?: string;
    /** 字段名称 */
    name?: string;
    /** 帮助提示 */
    remark?: string;
    /** 字段类型 */
    inputType?: EKeyParameterDetailsResponseObject_inputType;
    /** 文本类型 */
    textType?: EKeyParameterDetailsResponseObject_textType;
    /** 文本比较值，多个英文逗号,分割 */
    textCompareValue?: string;
    /** 文本比较值集 */
    textCompareValueList?: string[];
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 图片最大上传量 */
    imageTotalCount?: number;
    /** 选项集，多个英文逗号,分割 */
    selector?: string;
    /** 选项集 */
    selectorList?: string[];
}
/** 产能响应对象 */
export interface IProductivityResponseObject {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProductivityResponseObject_readyTimeUnit;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: EProductivityResponseObject_capacityTimeType;
    /** 产出数量 */
    capacityProduceQuantity?: number;
}
/** 工费响应对象 */
export interface ICostResponseObject {
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 关联工序 */
    processRp?: IAssociatedDropDownResponseObjects[];
    /** 关联物料 */
    materialRp?: IAssociatedDropDownResponseObjects[];
    /** 合格产出工费单价（元） */
    producePrice?: number;
    /** 返工产出工费单价（元） */
    backProducePrice?: number;
    /** 准备工费（元） */
    readyPrice?: number;
}

export enum ESpecificMaterialNumberAssociatedProcessPathStepDataStructureResponseObject_bomConsumeSureType {
    /** 在进站时确认 */
    MOVE_IN = "MOVE_IN",
    /** 在出站时确认 */
    MOVE_OUT = "MOVE_OUT"
}

export enum EStandardProcessSpecificProcessCardDetailsObject_type {
    /** 文件 */
    FILE = "FILE",
    /** 描述 */
    TEXT = "TEXT",
    /** 录入 */
    INPUT = "INPUT"
}

export enum EStandardProcessSpecificProcessCardDetailsObject_inputType {
    /** 文本 */
    TEXT = "TEXT",
    /** 单选框 */
    SELECTOR = "SELECTOR",
    /** 多选框 */
    CHECKBOX = "CHECKBOX",
    /** 数值 */
    NUMBER = "NUMBER",
    /** 上传图片 */
    IMAGE = "IMAGE"
}

export enum EStandardProcessSpecificProcessCardDetailsObject_textType {
    /** 输入 */
    INPUT = "INPUT",
    /** 比较 */
    COMPARE = "COMPARE"
}

export enum EKeyParameterDetailsResponseObject_inputType {
    /** 文本 */
    TEXT = "TEXT",
    /** 单选框 */
    SELECTOR = "SELECTOR",
    /** 多选框 */
    CHECKBOX = "CHECKBOX",
    /** 数值 */
    NUMBER = "NUMBER",
    /** 上传图片 */
    IMAGE = "IMAGE"
}

export enum EKeyParameterDetailsResponseObject_textType {
    /** 输入 */
    INPUT = "INPUT",
    /** 比较 */
    COMPARE = "COMPARE"
}

export enum EProductivityResponseObject_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProductivityResponseObject_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
