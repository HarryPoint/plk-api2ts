import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺卡相关/getDetailByIdUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessCardInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/processSheet/getDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«工艺卡信息返回VO» */
export interface IJSONResultProcessCardInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessCardInformationIsReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工艺卡信息返回VO */
export interface IProcessCardInformationIsReturnedToVO {
    /** 工艺卡编号 */
    code?: string;
    /** 文件集合 */
    fileList?: IProcessCardDetailsReturnedToVO[];
    /** id */
    id?: string;
    /** 录入集合 */
    inputList?: IProcessCardDetailsReturnedToVO[];
    /** 物料ids */
    materialIds?: string[];
    /** 工艺卡名称 */
    name?: string;
    /** 工序ids */
    processIds?: string[];
    /** 描述集合 */
    textList?: IProcessCardDetailsReturnedToVO[];
}
/** 工艺卡明细返回VO */
export interface IProcessCardDetailsReturnedToVO {
    /** 明细编号 */
    code: string;
    /** 文件key */
    fileKey?: string;
    /** 文件名称 */
    fileName?: string;
    /** 文件完整url */
    fileUrl?: string;
    /** 明细id */
    id?: string;
    /** 图片最大上传量 */
    imageTotalCount?: number;
    /** 录入类型 */
    inputType?: EProcessCardDetailsReturnedToVO_inputType;
    /** 下限 */
    lowerLimit?: number;
    /** 明细名称/标题 */
    name: string;
    /** 数值单位 */
    numberUnit?: string;
    /** 描述内容/备注 */
    remark?: string;
    /** 选项集 */
    selectorList?: string[];
    /** 文本比较值集 */
    textCompareValueList?: string[];
    /** 文本类型 */
    textType?: EProcessCardDetailsReturnedToVO_textType;
    /** 明细类型 */
    type?: EProcessCardDetailsReturnedToVO_type;
    /** 上限 */
    upperLimit?: number;
}

export enum EProcessCardDetailsReturnedToVO_inputType {
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

export enum EProcessCardDetailsReturnedToVO_textType {
    /** 输入 */
    INPUT = "INPUT",
    /** 比较 */
    COMPARE = "COMPARE"
}

export enum EProcessCardDetailsReturnedToVO_type {
    /** 文件 */
    FILE = "FILE",
    /** 描述 */
    TEXT = "TEXT",
    /** 录入 */
    INPUT = "INPUT"
}
