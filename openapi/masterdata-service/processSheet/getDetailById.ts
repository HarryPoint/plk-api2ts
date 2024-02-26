import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺卡相关/getDetailByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string; enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultProcessCardInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/processSheet/getDetailById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«工艺卡信息返回VO» */
export interface IJSONResultProcessCardInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessCardInformationIsReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 工艺卡信息返回VO */
export interface IProcessCardInformationIsReturnedToVO {
    /** id */
    id?: number;
    /** 工艺卡名称 */
    name?: string;
    /** 工艺卡编号 */
    code?: string;
    /** 物料ids */
    materialIds?: number[];
    /** 工序ids */
    processIds?: number[];
    /** 文件集合 */
    fileList?: IProcessCardDetailsReturnedToVO[];
    /** 描述集合 */
    textList?: IProcessCardDetailsReturnedToVO[];
    /** 录入集合 */
    inputList?: IProcessCardDetailsReturnedToVO[];
}
/** 工艺卡明细返回VO */
export interface IProcessCardDetailsReturnedToVO {
    /** 明细id */
    id?: number;
    /** 明细类型 */
    type?: EProcessCardDetailsReturnedToVO_type;
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
    inputType?: EProcessCardDetailsReturnedToVO_inputType;
    /** 文本类型 */
    textType?: EProcessCardDetailsReturnedToVO_textType;
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

export enum EProcessCardDetailsReturnedToVO_type {
    /** 文件 */
    FILE = "FILE",
    /** 描述 */
    TEXT = "TEXT",
    /** 录入 */
    INPUT = "INPUT"
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
